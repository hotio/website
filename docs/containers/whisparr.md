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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31799" onclick="CopyToClipboard('tag31799');return false;" class="tag-decoration">v2</div><div id="tag18099" onclick="CopyToClipboard('tag18099');return false;" class="tag-decoration">v2-b5a3836</div><div id="tag9684" onclick="CopyToClipboard('tag9684');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag21790" onclick="CopyToClipboard('tag21790');return false;" class="tag-decoration">v2-v2</div><div id="tag525" onclick="CopyToClipboard('tag525');return false;" class="tag-decoration">v2-v2.2</div><div id="tag28850" onclick="CopyToClipboard('tag28850');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b5a3836c59570640cc17371cd28169ea305948a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681497871" target="_blank">2026-07-19 09:23:37</a></td></tr>
<tr><td><div id="tag8773" onclick="CopyToClipboard('tag8773');return false;" class="tag-decoration">v2-develop</div><div id="tag19350" onclick="CopyToClipboard('tag19350');return false;" class="tag-decoration">v2-develop-a4ad935</div><div id="tag19548" onclick="CopyToClipboard('tag19548');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag1630" onclick="CopyToClipboard('tag1630');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag6810" onclick="CopyToClipboard('tag6810');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag25734" onclick="CopyToClipboard('tag25734');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a4ad93559ed1c47634e2271a61a1adb57bd3ecdc" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681491856" target="_blank">2026-07-19 09:23:26</a></td></tr>
<tr><td><div id="tag820" onclick="CopyToClipboard('tag820');return false;" class="tag-decoration">v3</div><div id="tag18139" onclick="CopyToClipboard('tag18139');return false;" class="tag-decoration">v3-8e8d413</div><div id="tag14655" onclick="CopyToClipboard('tag14655');return false;" class="tag-decoration">v3-3.3.5-release.861</div><div id="tag12641" onclick="CopyToClipboard('tag12641');return false;" class="tag-decoration">v3-v3</div><div id="tag22576" onclick="CopyToClipboard('tag22576');return false;" class="tag-decoration">v3-v3.3</div><div id="tag1020" onclick="CopyToClipboard('tag1020');return false;" class="tag-decoration">v3-v3.3.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8e8d41311f875473ab2d370d0190da5829f10466" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29878160771" target="_blank">2026-07-21 23:46:10</a></td></tr>
<tr><td><div id="tag3105" onclick="CopyToClipboard('tag3105');return false;" class="tag-decoration">v3-develop</div><div id="tag1916" onclick="CopyToClipboard('tag1916');return false;" class="tag-decoration">v3-develop-e2f75e3</div><div id="tag31062" onclick="CopyToClipboard('tag31062');return false;" class="tag-decoration">v3-develop-3.3.6-develop.878</div><div id="tag19037" onclick="CopyToClipboard('tag19037');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5927" onclick="CopyToClipboard('tag5927');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag30495" onclick="CopyToClipboard('tag30495');return false;" class="tag-decoration">v3-develop-v3.3.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/e2f75e3a72f576399328497f45742bf4a9541f20" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29793036024" target="_blank">2026-07-21 01:24:30</a></td></tr>
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
