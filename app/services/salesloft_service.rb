class SalesloftService
  def self.fetch_people
    # this 'get' people request will only fetch the first 25 records.
    # pagination and storing records in db could help with analyzing all people associated with this api_key.
    url = 'https://api.salesloft.com/v2/people'
    response = HTTParty.get(url, headers:{'Authorization': "Bearer #{ENV['SALESLOFT_API_KEY']}"})
    return response
  end

  def self.find_uniq_char_freq
    people = fetch_people['data']
    if people.present?
      # pluck email address from array of people
      email_collection = people.collect{|p| p['email_address']}
      # join all email addresses into one giant string and filter out non alphanumeric characters
      joint_email_string = email_collection.join('').gsub(/[^0-9a-z]/i, '')
      # unique alphanumeric characters in joint email string
      uniq_email_char = joint_email_string.split('').uniq
      # iterate through unique character array to find count of specific character in super string
      # return array of objects of character + frequency sorted by frequency
      char_freq_arr = uniq_email_char
                          .map{|c| {character: c, frequency: joint_email_string.count(c) } }
                          .sort_by{|obj| obj[:frequency]}.reverse
    else
      char_freq_arr = []
    end

    return char_freq_arr
  end

  def self.find_possible_dup
    people = fetch_people['data']
    possible_dup_arr = []
    dup_ids_arr = []
    # Very nested and inefficient loop within a loop.. def will need to refactor for situations where millions of people are in db
    people.each do |first_person|
      dup_obj = {people: []}
      if dup_ids_arr.exclude? first_person['id']
        dup_obj[:people].push(first_person)

        people.each do |second_person|
          string_similarity = StringSimilarityService.determine_similarity(first_person['email_address'], second_person['email_address'])
          dup_obj[:people].push(second_person) if string_similarity && first_person['id'] != second_person['id']
        end

        if dup_obj[:people].length > 1
          possible_dup_arr.push(dup_obj)
          dup_obj[:people].each{|person| dup_ids_arr.push(person['id'])}
        end
      end
    end

    return possible_dup_arr
  end

end
