import Vue from "vue";
import VueCodemirror from "vue-codemirror";
import "codemirror/lib/codemirror.css";

Vue.use(VueCodemirror, {
  options: {
    mode: "text/html",
    lineNumbers: false,
    collapseIdentical: false,
    highlightDifferences: false,
    readOnly: true,
    autofocus: false
  }
});
