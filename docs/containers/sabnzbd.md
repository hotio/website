---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag28605" onclick="CopyToClipboard('tag28605');return false;" class="tag-decoration">nightly</div><div id="tag20077" onclick="CopyToClipboard('tag20077');return false;" class="tag-decoration">nightly-e620835</div><div id="tag29358" onclick="CopyToClipboard('tag29358');return false;" class="tag-decoration">nightly-21d639bf5ff898e05dd48ee08ca76b63e20046a5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e620835b285d4b853bea1ea70cd72532845b8e7f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32326364482" target="_blank">2026-08-20 02:55:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13578" onclick="CopyToClipboard('tag13578');return false;" class="tag-decoration">release</div><div id="tag4986" onclick="CopyToClipboard('tag4986');return false;" class="tag-decoration">release-db48ce1</div><div id="tag10301" onclick="CopyToClipboard('tag10301');return false;" class="tag-decoration">release-5.1.1</div><div id="tag28310" onclick="CopyToClipboard('tag28310');return false;" class="tag-decoration">release-v5</div><div id="tag25618" onclick="CopyToClipboard('tag25618');return false;" class="tag-decoration">release-v5.1</div><div id="tag5592" onclick="CopyToClipboard('tag5592');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/db48ce174f247fc6d312f708eba8d9847f0ab073" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32160512150" target="_blank">2026-08-18 16:28:41</a></td></tr>
<tr><td><div id="tag4740" onclick="CopyToClipboard('tag4740');return false;" class="tag-decoration">testing</div><div id="tag7625" onclick="CopyToClipboard('tag7625');return false;" class="tag-decoration">testing-2b89365</div><div id="tag9318" onclick="CopyToClipboard('tag9318');return false;" class="tag-decoration">testing-5.1.1</div><div id="tag25642" onclick="CopyToClipboard('tag25642');return false;" class="tag-decoration">testing-v5</div><div id="tag19635" onclick="CopyToClipboard('tag19635');return false;" class="tag-decoration">testing-v5.1</div><div id="tag12577" onclick="CopyToClipboard('tag12577');return false;" class="tag-decoration">testing-v5.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2b89365d5cdad5f7b32c03b13ccc80e4ceba259d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32160517292" target="_blank">2026-08-18 16:28:45</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
