#includes methods to make HTTP requests easeier
module RequestHelpers
    def response_json
        JSON.parse(response.body)
    end
end