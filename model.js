
/**
 * 此文件由 BeConsole 自动生成，任何改动都会被 BeConsole 覆盖
 */
require("besdk")

// 在初始化 BeConsole "硬件" 视图中创建并配置的零件
exports.setup = function () {




	be.part["led1"] = new (require("besdk/driver/led")) ()

	be.part["led2"] = new (require("besdk/driver/led")) ()

	be.part["led3"] = new (require("besdk/driver/led")) ()

	be.part["led4"] = new (require("besdk/driver/led")) ()

	be.part["led5"] = new (require("besdk/driver/led")) ()

	be.part["led6"] = new (require("besdk/driver/led")) ()

	be.part["led7"] = new (require("besdk/driver/led")) ()

	be.part["led8"] = new (require("besdk/driver/led")) ()

	be.part["switch1"] = new (require('besdk/driver/switch.js')) ()

	be.part["switch2"] = new (require('besdk/driver/switch.js')) ()



	be.part["led1"].begin(undefined, 12)

	be.part["led2"].begin(14, undefined)

	be.part["led3"].begin(undefined, 21)

	be.part["led4"].begin(5, 22)

	be.part["led5"].begin(16, 23)

	be.part["led6"].begin(17, 26)

	be.part["led7"].begin(18, undefined)

	be.part["led8"].begin(undefined, 19)

	be.part["switch1"].begin( 13, 15 )

	be.part["switch2"].begin( 36, 39 )


}

// 根据 BeConsole "编程" 视图中的程序卡片生成的JS代码
exports.runCards = async function(){

}
