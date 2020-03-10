require 'rails_helper.rb'

RSpec.describe SalesloftService do
  describe '.fetch_people' do
    it 'hits the salesloft api for people data' do
      stub_request(:any, 'https://api.salesloft.com/v2/people')
          .to_return body: <<-EOS
              {
                "data":[
                  {
                    "id":"AAAAAAAAAAAAAAAA",
                    "display_name":"AAAAAAAAAAAAAAA"
                  },
                  {
                    "id":"BBBBBBBBBBBBBBBB",
                    "display_name":"BBBBBBBBBBBBB"
                  },
                  {
                    "id":"CCCCCCCCCCCCCCCC",
                    "display_name":"CCCCCCCCCCCCC"
                  }
                ]
              }
      EOS

      result = SalesloftService.fetch_people
      expect(result.count).to equal(3)
    end
  end
end