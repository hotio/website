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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12252" onclick="CopyToClipboard('tag12252');return false;" class="tag-decoration">v2</div><div id="tag28277" onclick="CopyToClipboard('tag28277');return false;" class="tag-decoration">v2-b5a3836</div><div id="tag21365" onclick="CopyToClipboard('tag21365');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag7237" onclick="CopyToClipboard('tag7237');return false;" class="tag-decoration">v2-v2</div><div id="tag5914" onclick="CopyToClipboard('tag5914');return false;" class="tag-decoration">v2-v2.2</div><div id="tag12315" onclick="CopyToClipboard('tag12315');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b5a3836c59570640cc17371cd28169ea305948a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681497871" target="_blank">2026-07-19 09:23:37</a></td></tr>
<tr><td><div id="tag8174" onclick="CopyToClipboard('tag8174');return false;" class="tag-decoration">v2-develop</div><div id="tag7096" onclick="CopyToClipboard('tag7096');return false;" class="tag-decoration">v2-develop-1b91fa0</div><div id="tag26397" onclick="CopyToClipboard('tag26397');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag26736" onclick="CopyToClipboard('tag26736');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag13589" onclick="CopyToClipboard('tag13589');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag2598" onclick="CopyToClipboard('tag2598');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1b91fa0b0a1e5643fe1551eaf986f872b3de5397" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382129481" target="_blank">2026-07-28 17:16:12</a></td></tr>
<tr><td><div id="tag22550" onclick="CopyToClipboard('tag22550');return false;" class="tag-decoration">v3</div><div id="tag5620" onclick="CopyToClipboard('tag5620');return false;" class="tag-decoration">v3-c811cfe</div><div id="tag20887" onclick="CopyToClipboard('tag20887');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag17242" onclick="CopyToClipboard('tag17242');return false;" class="tag-decoration">v3-v3</div><div id="tag1178" onclick="CopyToClipboard('tag1178');return false;" class="tag-decoration">v3-v3.3</div><div id="tag14711" onclick="CopyToClipboard('tag14711');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/c811cfea2333ae674d6dbdee2e06e9cc986109b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30213554053" target="_blank">2026-07-26 17:54:00</a></td></tr>
<tr><td><div id="tag30169" onclick="CopyToClipboard('tag30169');return false;" class="tag-decoration">v3-develop</div><div id="tag17979" onclick="CopyToClipboard('tag17979');return false;" class="tag-decoration">v3-develop-8a014dd</div><div id="tag26620" onclick="CopyToClipboard('tag26620');return false;" class="tag-decoration">v3-develop-3.3.8-develop.981</div><div id="tag6225" onclick="CopyToClipboard('tag6225');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag7508" onclick="CopyToClipboard('tag7508');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag6257" onclick="CopyToClipboard('tag6257');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8a014dd0144b505188a3ea9adddf5b8aadd20003" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382140469" target="_blank">2026-07-28 17:16:21</a></td></tr>
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
