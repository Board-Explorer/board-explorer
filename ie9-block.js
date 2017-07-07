/**
@license
Copyright (C) 2017 Intel Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Do not populate the global namespace */
(function() {
  "use strict";

  function getIEVersion() {
    var agent = navigator.userAgent.toLowerCase(),
      tokenIndex = agent.indexOf('msie');
    return (tokenIndex != -1) ? parseInt(agent.substring(tokenIndex)) : false;
  }

  /* If the User Agent is IE9 or older, block loading in the browser */
  if (getIEVersion() && getIEVersion() <= 9) {
    console.log("IE9 or older detected.")

    /* Start a recurring timeout that keeps checking for document.body and
     * once found, set the body to a "Browser not supported..." message */
    function blockLoading() {
      if (!document.body) {
        setTimeout(blockLoading, 10);
        return;
      }

      while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
      }

      /* Try and stop loading of any objects by replacing the DOM immediately */
      document.body.innerHTML = "The Board Explorer requires Chrome, Firefox, or Internet Explorer 10 or higher.";

      /* Polymer and other agents may still be running and DOM stamping, so
       * wait for DOMContentLoaded to complete, then re-blank the DOM */
      document.addEventListener('DOMContentLoaded', function() {
        document.body.innerHTML = "<div style='margin:5em;text-align:center;font-size:30pt;'>The Board Explorer requires Chrome, Firefox, or Internet Explorer 10 or higher.</div>";
      });
    }

    blockLoading();
  }
})();
