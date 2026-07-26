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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag70" onclick="CopyToClipboard('tag70');return false;" class="tag-decoration">v2</div><div id="tag3137" onclick="CopyToClipboard('tag3137');return false;" class="tag-decoration">v2-b5a3836</div><div id="tag24494" onclick="CopyToClipboard('tag24494');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag17469" onclick="CopyToClipboard('tag17469');return false;" class="tag-decoration">v2-v2</div><div id="tag10971" onclick="CopyToClipboard('tag10971');return false;" class="tag-decoration">v2-v2.2</div><div id="tag10328" onclick="CopyToClipboard('tag10328');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b5a3836c59570640cc17371cd28169ea305948a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681497871" target="_blank">2026-07-19 09:23:37</a></td></tr>
<tr><td><div id="tag32693" onclick="CopyToClipboard('tag32693');return false;" class="tag-decoration">v2-develop</div><div id="tag26237" onclick="CopyToClipboard('tag26237');return false;" class="tag-decoration">v2-develop-a4ad935</div><div id="tag29123" onclick="CopyToClipboard('tag29123');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag2503" onclick="CopyToClipboard('tag2503');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag1469" onclick="CopyToClipboard('tag1469');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag19409" onclick="CopyToClipboard('tag19409');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a4ad93559ed1c47634e2271a61a1adb57bd3ecdc" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681491856" target="_blank">2026-07-19 09:23:26</a></td></tr>
<tr><td><div id="tag14440" onclick="CopyToClipboard('tag14440');return false;" class="tag-decoration">v3</div><div id="tag8393" onclick="CopyToClipboard('tag8393');return false;" class="tag-decoration">v3-c811cfe</div><div id="tag13454" onclick="CopyToClipboard('tag13454');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag8248" onclick="CopyToClipboard('tag8248');return false;" class="tag-decoration">v3-v3</div><div id="tag26338" onclick="CopyToClipboard('tag26338');return false;" class="tag-decoration">v3-v3.3</div><div id="tag17668" onclick="CopyToClipboard('tag17668');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/c811cfea2333ae674d6dbdee2e06e9cc986109b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30213554053" target="_blank">2026-07-26 17:54:00</a></td></tr>
<tr><td><div id="tag1598" onclick="CopyToClipboard('tag1598');return false;" class="tag-decoration">v3-develop</div><div id="tag13318" onclick="CopyToClipboard('tag13318');return false;" class="tag-decoration">v3-develop-eb20f66</div><div id="tag582" onclick="CopyToClipboard('tag582');return false;" class="tag-decoration">v3-develop-3.3.7-develop.977</div><div id="tag19106" onclick="CopyToClipboard('tag19106');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17331" onclick="CopyToClipboard('tag17331');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag23900" onclick="CopyToClipboard('tag23900');return false;" class="tag-decoration">v3-develop-v3.3.7</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/eb20f66b0c0ae93dc01de612b5b5e4db98d97065" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30211084206" target="_blank">2026-07-26 16:44:02</a></td></tr>
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
