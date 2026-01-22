---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3645" onclick="CopyToClipboard('tag3645');return false;" class="tag-decoration">release</div><div id="tag26791" onclick="CopyToClipboard('tag26791');return false;" class="tag-decoration">release-0a6a361</div><div id="tag6927" onclick="CopyToClipboard('tag6927');return false;" class="tag-decoration">release-8.3.0</div><div id="tag29115" onclick="CopyToClipboard('tag29115');return false;" class="tag-decoration">release-v8</div><div id="tag2104" onclick="CopyToClipboard('tag2104');return false;" class="tag-decoration">release-v8.3</div><div id="tag2707" onclick="CopyToClipboard('tag2707');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/0a6a3610b263fb94815a17477ab370634a5ab595" target="_blank">Upstream update: noblevpn-9c1903d => noblevpn-021f848</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21244701593" target="_blank">2026-01-22 10:19:14</a></td></tr>
<tr><td><div id="tag20985" onclick="CopyToClipboard('tag20985');return false;" class="tag-decoration">testing</div><div id="tag4445" onclick="CopyToClipboard('tag4445');return false;" class="tag-decoration">testing-b23410a</div><div id="tag2594" onclick="CopyToClipboard('tag2594');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag20755" onclick="CopyToClipboard('tag20755');return false;" class="tag-decoration">testing-v8</div><div id="tag30511" onclick="CopyToClipboard('tag30511');return false;" class="tag-decoration">testing-v8.3</div><div id="tag27809" onclick="CopyToClipboard('tag27809');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b23410a39b61dcf8ac1e663e6392c4aaa4a4101b" target="_blank">Upstream update: noblevpn-6fa044b => noblevpn-9c1903d</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21243850726" target="_blank">2026-01-22 09:51:28</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
