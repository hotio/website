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
<tr><td><div id="tag6350" onclick="CopyToClipboard('tag6350');return false;" class="tag-decoration">nightly</div><div id="tag22542" onclick="CopyToClipboard('tag22542');return false;" class="tag-decoration">nightly-e620835</div><div id="tag17111" onclick="CopyToClipboard('tag17111');return false;" class="tag-decoration">nightly-21d639bf5ff898e05dd48ee08ca76b63e20046a5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/e620835b285d4b853bea1ea70cd72532845b8e7f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32326364482" target="_blank">2026-08-20 02:55:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17007" onclick="CopyToClipboard('tag17007');return false;" class="tag-decoration">release</div><div id="tag22150" onclick="CopyToClipboard('tag22150');return false;" class="tag-decoration">release-db48ce1</div><div id="tag27327" onclick="CopyToClipboard('tag27327');return false;" class="tag-decoration">release-5.1.1</div><div id="tag5345" onclick="CopyToClipboard('tag5345');return false;" class="tag-decoration">release-v5</div><div id="tag28639" onclick="CopyToClipboard('tag28639');return false;" class="tag-decoration">release-v5.1</div><div id="tag10330" onclick="CopyToClipboard('tag10330');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/db48ce174f247fc6d312f708eba8d9847f0ab073" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32160512150" target="_blank">2026-08-18 16:28:41</a></td></tr>
<tr><td><div id="tag27995" onclick="CopyToClipboard('tag27995');return false;" class="tag-decoration">testing</div><div id="tag5833" onclick="CopyToClipboard('tag5833');return false;" class="tag-decoration">testing-2c7dbfe</div><div id="tag7330" onclick="CopyToClipboard('tag7330');return false;" class="tag-decoration">testing-5.1.1</div><div id="tag4074" onclick="CopyToClipboard('tag4074');return false;" class="tag-decoration">testing-v5</div><div id="tag11142" onclick="CopyToClipboard('tag11142');return false;" class="tag-decoration">testing-v5.1</div><div id="tag13449" onclick="CopyToClipboard('tag13449');return false;" class="tag-decoration">testing-v5.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/2c7dbfe018961baaa831a13dda7f5259801fdc01" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32326359975" target="_blank">2026-08-20 02:55:13</a></td></tr>
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
