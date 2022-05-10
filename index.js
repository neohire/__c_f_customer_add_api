

const f_customer_add_api = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello f_customer_add_api`}))
  res.end()
  
}

export default f_customer_add_api
