class StringSimilarityService
  #copy and pasta from https://pganalyze.com/blog/similarity-in-postgres-and-ruby-on-rails-using-trigrams
  def self.trigram(word)
    parts = []
    if word.strip != ""
      padded = "  #{word} ".downcase
      padded.chars.each_cons(3) { |w| parts << w.join }
    end
    return parts
  end

  def self.determine_similarity(str_1, str_2)
    tri1 = trigram(str_1)
    tri2 = trigram(str_2)

    return false if [tri1, tri2].any? { |arr| arr.size == 0 }

    # Find number of trigrams shared between them
    same_size = (tri1 & tri2).size
    # Find unique total trigrams in both arrays
    all_size = (tri1 | tri2).size

    calc = same_size.to_f / all_size

    return calc >= 0.6
  end
end