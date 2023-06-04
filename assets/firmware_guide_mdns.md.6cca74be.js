import{_ as e,o as t,c as o,V as a}from"./chunks/framework.de5c44cb.js";const m=JSON.parse('{"title":"MDNS","description":"","frontmatter":{},"headers":[],"relativePath":"firmware_guide/mdns.md","filePath":"firmware_guide/mdns.md","lastUpdated":1676223729000}'),n={name:"firmware_guide/mdns.md"},s=a('<h1 class="text-[var(--font-accent)]" id="mdns" tabindex="-1">MDNS <a class="header-anchor" href="#mdns" aria-label="Permalink to &quot;MDNS {.text-[var(--font-accent)]}&quot;">​</a></h1><h2 id="what-is-it" tabindex="-1">What is it? <a class="header-anchor" href="#what-is-it" aria-label="Permalink to &quot;What is it?&quot;">​</a></h2><p><code>mDNS</code> is a protocol that allows you to connect to a device using a name instead of an IP address. This is useful if you do not know the IP address of the device, or if you do not want to keep track of the IP address of the device. This is also useful if you are using a device that does not have a static IP address.</p><p>In the <code>mDNS</code> protocol the IP address of the device can change, but the name of the device will always be the same. This means that you can connect to the device using the name of the device, even if the IP address of the device changes.</p><h2 id="how-to-use-it" tabindex="-1">How to use it <a class="header-anchor" href="#how-to-use-it" aria-label="Permalink to &quot;How to use it&quot;">​</a></h2><h3 id="enable-mdns" tabindex="-1">Enable mDNS <a class="header-anchor" href="#enable-mdns" aria-label="Permalink to &quot;Enable mDNS&quot;">​</a></h3><p>The <code>mDNS</code> is enabled by default on the new firmware, and can not be disabled.</p><p>To use it, all you need to do is set the name of the device in the firmware config file.</p><p>This setting can be located under the <code>[wifi]</code> section of the <code>ini/user_config.ini</code> file.</p><div class="language-ini line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">mdnsname</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">openiristracker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># do not add .local</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>By default, the name of the device is <code>openiristracker</code>, however you can change it to whatever you want.</p><div class="warning custom-block"><p class="custom-block-title">Change the name</p><p>Since you have two ESP32 devices, you need to make sure that the name of the device is different for each device. If you do not change the name of the device, you will not be able to connect to both devices at the same time.</p></div><h3 id="connect-to-the-device" tabindex="-1">Connect to the device <a class="header-anchor" href="#connect-to-the-device" aria-label="Permalink to &quot;Connect to the device&quot;">​</a></h3><p>To connect to the device, you need to use the name of the device followed by <code>.local</code>. For example, if the name of the device is <code>esp32</code>, you can connect to the device using <code>http://esp32.local</code>.</p><h2 id="prerequisites-bonjour" tabindex="-1">Prerequisites <code>Bonjour</code> <a class="header-anchor" href="#prerequisites-bonjour" aria-label="Permalink to &quot;Prerequisites `Bonjour`&quot;">​</a></h2><p><code>Bonjour</code> is required to use the <code>mDNS</code> protocol <em>for windows and mac only</em>. If you are using Windows, you can download Bonjour from <a href="https://support.apple.com/kb/DL999?locale=en_US" target="_blank" rel="noreferrer">here</a>. If you are using macOS, Bonjour is already installed.</p><p>You can also get the fully tested Bonjour package from us <a href="https://github.com/RedHawk989/EyeTrackVR/tree/GUI/GUI/assets/3rdParty" target="_blank" rel="noreferrer">here</a> (for Windows only).</p><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><h3 id="can-not-connect-to-the-device" tabindex="-1">Can not connect to the device <a class="header-anchor" href="#can-not-connect-to-the-device" aria-label="Permalink to &quot;Can not connect to the device&quot;">​</a></h3><p>If you can not connect to the device, make sure that the name of the device is correct. If the name of the device is correct, make sure that the device is connected to the network.</p><p>If the device is connected to the network, try to restart the device. If the device is still not connected, try to restart the router.</p>',21),i=[s];function c(r,d,h,l,u,p){return t(),o("div",null,i)}const v=e(n,[["render",c]]);export{m as __pageData,v as default};
