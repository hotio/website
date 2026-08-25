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
<tr><td><div id="tag12726" onclick="CopyToClipboard('tag12726');return false;" class="tag-decoration">nightly</div><div id="tag16515" onclick="CopyToClipboard('tag16515');return false;" class="tag-decoration">nightly-87897cd</div><div id="tag12308" onclick="CopyToClipboard('tag12308');return false;" class="tag-decoration">nightly-f498147189f325393c5b762279b8cf708aa37e56</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/87897cdd6e6b5ae0e20586c8ed80458f2886f349" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32842206373" target="_blank">2026-08-25 11:25:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7766" onclick="CopyToClipboard('tag7766');return false;" class="tag-decoration">release</div><div id="tag27807" onclick="CopyToClipboard('tag27807');return false;" class="tag-decoration">release-a5cc15e</div><div id="tag2776" onclick="CopyToClipboard('tag2776');return false;" class="tag-decoration">release-5.1.1</div><div id="tag29227" onclick="CopyToClipboard('tag29227');return false;" class="tag-decoration">release-v5</div><div id="tag15186" onclick="CopyToClipboard('tag15186');return false;" class="tag-decoration">release-v5.1</div><div id="tag31266" onclick="CopyToClipboard('tag31266');return false;" class="tag-decoration">release-v5.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a5cc15e20c8afb8fa435dc7d82c514d53d8db142" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32380904002" target="_blank">2026-08-20 14:34:01</a></td></tr>
<tr><td><div id="tag12031" onclick="CopyToClipboard('tag12031');return false;" class="tag-decoration">testing</div><div id="tag13129" onclick="CopyToClipboard('tag13129');return false;" class="tag-decoration">testing-3af11ba</div><div id="tag10092" onclick="CopyToClipboard('tag10092');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag27487" onclick="CopyToClipboard('tag27487');return false;" class="tag-decoration">testing-v5</div><div id="tag26374" onclick="CopyToClipboard('tag26374');return false;" class="tag-decoration">testing-v5.1</div><div id="tag5893" onclick="CopyToClipboard('tag5893');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3af11baf0e5de25c5c954bbebe93849021f8a259" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32861171373" target="_blank">2026-08-25 14:42:17</a></td></tr>
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
