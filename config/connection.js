mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness_tracker_db',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  