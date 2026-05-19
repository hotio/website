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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2543" onclick="CopyToClipboard('tag2543');return false;" class="tag-decoration">v2</div><div id="tag11055" onclick="CopyToClipboard('tag11055');return false;" class="tag-decoration">v2-abbdf6a</div><div id="tag6997" onclick="CopyToClipboard('tag6997');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag23494" onclick="CopyToClipboard('tag23494');return false;" class="tag-decoration">v2-v2</div><div id="tag9338" onclick="CopyToClipboard('tag9338');return false;" class="tag-decoration">v2-v2.2</div><div id="tag11801" onclick="CopyToClipboard('tag11801');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/abbdf6adaec2f890b128d02e02ae2ae2af58d889" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087564" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag27794" onclick="CopyToClipboard('tag27794');return false;" class="tag-decoration">v2-develop</div><div id="tag12061" onclick="CopyToClipboard('tag12061');return false;" class="tag-decoration">v2-develop-afe14e2</div><div id="tag26408" onclick="CopyToClipboard('tag26408');return false;" class="tag-decoration">v2-develop-2.2.0-develop.123</div><div id="tag17358" onclick="CopyToClipboard('tag17358');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag15048" onclick="CopyToClipboard('tag15048');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag17017" onclick="CopyToClipboard('tag17017');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/afe14e25a73635a664446e82d4d903ef4cb671fc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/26132473525" target="_blank">2026-05-19 23:53:06</a></td></tr>
<tr><td><div id="tag24403" onclick="CopyToClipboard('tag24403');return false;" class="tag-decoration">v3</div><div id="tag29324" onclick="CopyToClipboard('tag29324');return false;" class="tag-decoration">v3-7932ed4</div><div id="tag5844" onclick="CopyToClipboard('tag5844');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag18900" onclick="CopyToClipboard('tag18900');return false;" class="tag-decoration">v3-v3</div><div id="tag14073" onclick="CopyToClipboard('tag14073');return false;" class="tag-decoration">v3-v3.3</div><div id="tag1997" onclick="CopyToClipboard('tag1997');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7932ed4668859862bc68a5f4c2e64dc7edd91d46" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087814" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag19164" onclick="CopyToClipboard('tag19164');return false;" class="tag-decoration">v3-develop</div><div id="tag31819" onclick="CopyToClipboard('tag31819');return false;" class="tag-decoration">v3-develop-4e32145</div><div id="tag9145" onclick="CopyToClipboard('tag9145');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag28736" onclick="CopyToClipboard('tag28736');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag11616" onclick="CopyToClipboard('tag11616');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag7253" onclick="CopyToClipboard('tag7253');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4e32145a0d008bda8d2e7dae0c04813241e87f3d" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988088066" target="_blank">2026-05-17 10:16:42</a></td></tr>
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
