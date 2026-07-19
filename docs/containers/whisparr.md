---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13610" onclick="CopyToClipboard('tag13610');return false;" class="tag-decoration">v2</div><div id="tag1792" onclick="CopyToClipboard('tag1792');return false;" class="tag-decoration">v2-b5a3836</div><div id="tag13070" onclick="CopyToClipboard('tag13070');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag12954" onclick="CopyToClipboard('tag12954');return false;" class="tag-decoration">v2-v2</div><div id="tag17077" onclick="CopyToClipboard('tag17077');return false;" class="tag-decoration">v2-v2.2</div><div id="tag21707" onclick="CopyToClipboard('tag21707');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b5a3836c59570640cc17371cd28169ea305948a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681497871" target="_blank">2026-07-19 09:23:37</a></td></tr>
<tr><td><div id="tag12775" onclick="CopyToClipboard('tag12775');return false;" class="tag-decoration">v2-develop</div><div id="tag32391" onclick="CopyToClipboard('tag32391');return false;" class="tag-decoration">v2-develop-a4ad935</div><div id="tag30406" onclick="CopyToClipboard('tag30406');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag27684" onclick="CopyToClipboard('tag27684');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag10371" onclick="CopyToClipboard('tag10371');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag55" onclick="CopyToClipboard('tag55');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a4ad93559ed1c47634e2271a61a1adb57bd3ecdc" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681491856" target="_blank">2026-07-19 09:23:26</a></td></tr>
<tr><td><div id="tag8943" onclick="CopyToClipboard('tag8943');return false;" class="tag-decoration">v3</div><div id="tag24478" onclick="CopyToClipboard('tag24478');return false;" class="tag-decoration">v3-4cd7131</div><div id="tag31480" onclick="CopyToClipboard('tag31480');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag9616" onclick="CopyToClipboard('tag9616');return false;" class="tag-decoration">v3-v3</div><div id="tag11050" onclick="CopyToClipboard('tag11050');return false;" class="tag-decoration">v3-v3.3</div><div id="tag20128" onclick="CopyToClipboard('tag20128');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4cd7131e55cf28a24f0da07c9b226a2c176adafd" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681516891" target="_blank">2026-07-19 09:24:13</a></td></tr>
<tr><td><div id="tag27798" onclick="CopyToClipboard('tag27798');return false;" class="tag-decoration">v3-develop</div><div id="tag23661" onclick="CopyToClipboard('tag23661');return false;" class="tag-decoration">v3-develop-b04f65a</div><div id="tag17576" onclick="CopyToClipboard('tag17576');return false;" class="tag-decoration">v3-develop-3.3.5-develop.846</div><div id="tag18860" onclick="CopyToClipboard('tag18860');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag15102" onclick="CopyToClipboard('tag15102');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag27397" onclick="CopyToClipboard('tag27397');return false;" class="tag-decoration">v3-develop-v3.3.5</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b04f65afde74b5cfffccb5f002a1244b13517a87" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29663758368" target="_blank">2026-07-18 22:36:34</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
