module.exports = async function (context, myTimer) {
  const timeStamp = new Date().toISOString();
  context.log("Timer trigger function ran!", timeStamp);

  // Simulated logic — in real case, fetch appointments & send reminders
};
