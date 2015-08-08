json.array!(@voters) do |voter|
  json.extract! voter, :id, :name, :message, :vote
  json.url voter_url(voter, format: :json)
end
