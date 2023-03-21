
class PaletteGenerator {
  static baseUrl = "http://colormind.io/api/";

  static async getPalette(quantity = 5, input = []) {
    const stream = await fetch(this.baseUrl, {
      method: "POST",
      body: JSON.stringify(this.getTemplate(input)),
    });
    const data = await stream.json();

    const colors = PaletteGenerator.getColorsInfo(data.result);

    if (quantity === 5) return colors;

    return colors.filter((color, index) => index < quantity);
  }

  static getTemplate(input) {
    return {
      input: input,
      model: "default",
    };
  }

  static getHexColor(color) {
    return `#${color[0].toString(16)}${color[1].toString(16)}${color[2].toString(16)}`;
  }

  static getColorsInfo(colors) {
    return colors.map((color) => {
      const ret = {};

      ret.color = PaletteGenerator.getHexColor(color);
      ret.name = ntc.name(ret.color)[1];

      return ret;
    });
  }
}


const test = async () => console.log(await PaletteGenerator.getPalette(3, []));

//PaletteGenerator.getPalette(quantity, input)

//Quantity = the number of colors min: 1 max: 5

//input = the starting colors array [[red, green, blue], [red, green blue]]

test();
