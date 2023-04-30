const jdDetect = (jdNumber: string) => {
  let acid;

  if (typeof jdNumber === "number") {
    jdNumber = jdNumber.toString();
  }

  if (jdNumber.match(/^\d\d-\d\d$/)) {
    acid = "area";
  }

  if (jdNumber.match(/^\d\d$/)) {
    acid = "category";
  }

  if (jdNumber.match(/^\d\d\.\d\d$/)) {
    acid = "id";
  }

  if (acid !== "") {
    return acid;
  } else {
    throw new Error(
      "🔴 jdDetect was passed something that it did not recognise."
    );
  }
};

export { jdDetect as default };
