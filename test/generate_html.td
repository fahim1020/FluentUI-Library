import "strings"
import "io"

raw := embed("../Utilities/dist/fluentui.css")

arr := strings.re_find(`\.(\w[\w\-_]*)\b`, raw, -1)

var ta = ""

for c in arr {
	class := c[1]
	ta += format("<span class=\"%s\">%s</span><br />\n", class.strings, class.strings)
}


var html = embed("template.html")

html = format(html, ta)


io.writefile("test/out.html", html)


println(ta)