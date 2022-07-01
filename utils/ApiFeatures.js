class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = Number(this.queryStr.keyword)
      ? {
          HBL_No: {
            $eq: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };

    const removeFields = [
      "HBL_No",
      "MBL_No",
      "IGM_No",
      "License_No",
      "Qty",
      "Date",
    ];

    removeFields.forEach((key) => delete queryCopy[key]);
    const fine = Number(queryCopy);
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(this.queryCopy);

    return this;
  }
}

module.exports = ApiFeatures;
