require 'fcm'

api_key = "<API_KEY>"

registration_tokens = [dVfk2RgB2J4:APA91bHu6JyFN1GjKZ7ka3Jn9_IQktXoZDYD7Z9cuv51MUgX-Y2YowLPIkKHs_s6Y2cxf_byGD4MRDx7A2mKCDRjP5EelkttMmBCZXxsjndNJRWGPDz5ALQMAMJ8YxYCvMAmVe7k-f3S]

fcm = FCM.new(AIzaSyB6HjIjeFbfo6z27D_aaUVwYsazaPdvP94)

# options = {data: {score: "123"}}
options = {
  notification: {
    title: "Portugal vs. Denmark",
    body: "5 to 1",
    icon: "firebase-logo.png",
    click_action: "http://localhost:8081"
  }
}

response = fcm.send(registration_tokens, options)