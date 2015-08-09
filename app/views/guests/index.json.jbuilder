json.array!(@guests) do |guest|
  json.extract! guest, :id, :name, :message, :boy, :girl
  json.url guest_url(guest, format: :json)
end
