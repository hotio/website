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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23257" onclick="CopyToClipboard('tag23257');return false;" class="tag-decoration">v2</div><div id="tag31382" onclick="CopyToClipboard('tag31382');return false;" class="tag-decoration">v2-abbdf6a</div><div id="tag28538" onclick="CopyToClipboard('tag28538');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag1760" onclick="CopyToClipboard('tag1760');return false;" class="tag-decoration">v2-v2</div><div id="tag26015" onclick="CopyToClipboard('tag26015');return false;" class="tag-decoration">v2-v2.2</div><div id="tag17838" onclick="CopyToClipboard('tag17838');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/abbdf6adaec2f890b128d02e02ae2ae2af58d889" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087564" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag27595" onclick="CopyToClipboard('tag27595');return false;" class="tag-decoration">v2-develop</div><div id="tag2269" onclick="CopyToClipboard('tag2269');return false;" class="tag-decoration">v2-develop-6f299d7</div><div id="tag1379" onclick="CopyToClipboard('tag1379');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag5043" onclick="CopyToClipboard('tag5043');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag12245" onclick="CopyToClipboard('tag12245');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16373" onclick="CopyToClipboard('tag16373');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6f299d795bbb90b74906ea2993190da719e55d49" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27160917487" target="_blank">2026-06-08 19:13:28</a></td></tr>
<tr><td><div id="tag4364" onclick="CopyToClipboard('tag4364');return false;" class="tag-decoration">v3</div><div id="tag29926" onclick="CopyToClipboard('tag29926');return false;" class="tag-decoration">v3-7932ed4</div><div id="tag13374" onclick="CopyToClipboard('tag13374');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag24804" onclick="CopyToClipboard('tag24804');return false;" class="tag-decoration">v3-v3</div><div id="tag5040" onclick="CopyToClipboard('tag5040');return false;" class="tag-decoration">v3-v3.3</div><div id="tag30502" onclick="CopyToClipboard('tag30502');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7932ed4668859862bc68a5f4c2e64dc7edd91d46" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087814" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag4534" onclick="CopyToClipboard('tag4534');return false;" class="tag-decoration">v3-develop</div><div id="tag27313" onclick="CopyToClipboard('tag27313');return false;" class="tag-decoration">v3-develop-4e32145</div><div id="tag12970" onclick="CopyToClipboard('tag12970');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag6573" onclick="CopyToClipboard('tag6573');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17513" onclick="CopyToClipboard('tag17513');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag10672" onclick="CopyToClipboard('tag10672');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4e32145a0d008bda8d2e7dae0c04813241e87f3d" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988088066" target="_blank">2026-05-17 10:16:42</a></td></tr>
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
