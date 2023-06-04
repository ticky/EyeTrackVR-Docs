import{_ as a,i as e}from"./chunks/index.267f601a.js";import{o as s,c as r,G as i,b as l,V as n,z as o,a as t}from"./chunks/framework.de5c44cb.js";const d=n('<h1 class="text-[var(--font-accent)]" id="updating-platformio" tabindex="-1">Updating Platformio <a class="header-anchor" href="#updating-platformio" aria-label="Permalink to &quot;Updating Platformio {.text-[var(--font-accent)]}&quot;">​</a></h1><p>Sometimes, when building and uploading the firmware, you may run into bizarre, even-though the code is correct - platformio will refuse to build and instead will complain with some weird error.</p><p>It usually means that either PlatformIO, or ArduinoSDK got and update and that&#39;s the moment when this guide may come in handy.</p><h2 id="updating-platformio-itself" tabindex="-1">Updating PlatformIO itself <a class="header-anchor" href="#updating-platformio-itself" aria-label="Permalink to &quot;Updating PlatformIO itself&quot;">​</a></h2><p>There are two ways to update your platformio installation</p><h3 id="via-cli" tabindex="-1">Via CLI <a class="header-anchor" href="#via-cli" aria-label="Permalink to &quot;Via CLI&quot;">​</a></h3><p>You can update it easily by simply typing in one command into your terminal.</p>',7),c=n('<ol><li>Open a terminal / command prompt</li><li>Type <code>pio upgrade</code> and press enter</li><li>Wait for it to finish</li><li>Done</li></ol><h3 id="via-platformio-in-visual-studio-code" tabindex="-1">Via PlatformIO in Visual Studio Code <a class="header-anchor" href="#via-platformio-in-visual-studio-code" aria-label="Permalink to &quot;Via PlatformIO in Visual Studio Code&quot;">​</a></h3><p>You can also update it using the platformio tab in your Visual Studio Code.</p><ol><li>Open VSC</li><li>Click on that little and icon on the sidebar</li></ol>',4),p=o("ol",{start:"3"},[o("li",null,[t("A side panel will open, there will be a couple of sections, one of them called "),o("code",null,"Quick Access"),t(", open it.")])],-1),u=o("ol",{start:"4"},[o("li",null,[t("In "),o("code",null,"Quick Access"),t(" section, click on the "),o("code",null,"Miscelleneous"),t(" tab")])],-1),_=o("ol",{start:"5"},[o("li",null,[t("Then, click on the "),o("code",null,"Upgrade PlatformIO Core")])],-1),h=n('<ol start="6"><li>Wait for it to finnish and done!</li></ol><h2 id="upgrading-the-sdk" tabindex="-1">Upgrading the SDK <a class="header-anchor" href="#upgrading-the-sdk" aria-label="Permalink to &quot;Upgrading the SDK&quot;">​</a></h2><p>You&#39;ll also need to upgrade the SDK from timem to do this</p><h3 id="upgrading-the-sdk-via-vsc" tabindex="-1">Upgrading the SDK via VSC <a class="header-anchor" href="#upgrading-the-sdk-via-vsc" aria-label="Permalink to &quot;Upgrading the SDK via VSC&quot;">​</a></h3><ol><li>Follow the guide above up until clicking on the <code>Quick Access</code> section.</li><li>Instead, open the <code>PIO Home</code> and select <code>Open</code></li></ol>',5),m=o("ol",{start:"3"},[o("li",null,[t("This will open a window for PlatformIO dashboard, in there, click on a "),o("code",null,"Platforms"),t(" button on the sidebar")])],-1),f=o("ol",{start:"4"},[o("li",null,[t("Once there, you should see a couple of tabs next to the side bard, things like "),o("code",null,"Installed"),t(" or "),o("code",null,"Embedded"),t(". Click on "),o("code",null,"Updates")])],-1),g=o("ol",{start:"5"},[o("li",null,[t("Locate a platform called "),o("code",null,"Espressif 32"),t(" and click on "),o("code",null,"Update to <version>")])],-1),b=o("ol",{start:"6"},[o("li",null,"Wait until it is done and that's it!")],-1),v=JSON.parse('{"title":"Updating Platformio","description":"","frontmatter":{},"headers":[],"relativePath":"firmware_guide/update_platformio.md","filePath":"firmware_guide/update_platformio.md","lastUpdated":1678402493000}'),k={name:"firmware_guide/update_platformio.md"},w=Object.assign(k,{setup(P){return(S,T)=>(s(),r("div",null,[d,i(a,{options:l(e).pio_upgrade_command},null,8,["options"]),c,i(a,{options:l(e).ant_logo_platformio},null,8,["options"]),p,i(a,{options:l(e).platformio_quick_access},null,8,["options"]),u,i(a,{options:l(e).platformio_quick_access_miscellaneous},null,8,["options"]),_,i(a,{options:l(e).platformio_quick_access_upgrade_core},null,8,["options"]),h,i(a,{options:l(e).platformio_pio_home},null,8,["options"]),m,i(a,{options:l(e).platformio_pio_sidebar_platforms},null,8,["options"]),f,i(a,{options:l(e).platformio_pio_sidebar_platforms_updates},null,8,["options"]),g,i(a,{options:l(e).platformio_pio_espressif32},null,8,["options"]),b]))}});export{v as __pageData,w as default};
