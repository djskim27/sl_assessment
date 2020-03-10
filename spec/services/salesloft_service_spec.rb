require 'rails_helper.rb'

RSpec.describe SalesloftService do

  describe '.fetch_people' do
    it 'hits the salesloft api for people data' do
      stub_request(:any, 'https://api.salesloft.com/v2/people')
          .to_return(:body => '{"data":[{"id":"AAAAAAA"}, {"id":"BBBBBB"}, {"id":"CCCCCC"}]}',
                     :headers => {"Content-Type"=> "application/json"})

      result = SalesloftService.fetch_people
      expect(result.count).to equal(3)
    end


  end

  describe '.find_uniq_char_freq' do
    it 'finds the unique alphanumeric frequency of every email address' do
      stub_request(:any, 'https://api.salesloft.com/v2/people')
          .to_return(:body => '{"data":[{"id":"AAAAAAA","email_address":"aaa"}, {"id":"BBBBBB","email_address":"bbbb"}, {"id":"CCCCCC", "email_address":"ccccc"}]}',
                     :headers => {"Content-Type"=> "application/json"})

      result = SalesloftService.find_uniq_char_freq
      expected_result = [
          {:character=>"c", :frequency=>5},
          {:character=>"b", :frequency=>4},
          {:character=>"a", :frequency=>3},
      ]
      expect(result.count).to equal(3)
      expect(result).to eq(expected_result)
      end
    end

    describe '.find_possible_dup' do
      it 'finds groups of possible duplicate people with similar email addresses' do
        stub_request(:any, 'https://api.salesloft.com/v2/people')
            .to_return(:body => '{"data":[{"id":"AAAAAAA","email_address":"davidkim@gmail.com"}, {"id":"BBBBBB","email_address":"davidkimm@gmail.com"}, {"id":"CCCCCC", "email_address":"koopa@hotmail.com"}]}',
                       :headers => {"Content-Type"=> "application/json"})

        result = SalesloftService.find_possible_dup
        expected_result = [
            {:people=>[{"id"=>"AAAAAAA", "email_address"=>"davidkim@gmail.com"}, {"id"=>"BBBBBB", "email_address"=>"davidkimm@gmail.com"}]}
        ]
        expect(result.count).to equal(1)
        expect(result).to eq(expected_result)
      end
  end
end