const LoggerLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5
}

module.exports.logger = {
  Log(message, levels) {
      try{
          // change the logger levels to its color ig
          conole.log(message)
      }catch(err){
          Log("Seems like theres an error", LoggerLevels.error)
      }
  }
}
