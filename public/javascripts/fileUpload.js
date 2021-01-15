const { FilePond } = require("filepond");

FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileEncode,
)

FilePond.create(
    document.getElementById('a'));
FilePond.setOptions({stylePanelAspectRatio: 150/100})
FilePond.parse(document.body);