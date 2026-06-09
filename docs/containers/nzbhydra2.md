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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20" onclick="CopyToClipboard('tag20');return false;" class="tag-decoration">release</div><div id="tag29535" onclick="CopyToClipboard('tag29535');return false;" class="tag-decoration">release-9aeba08</div><div id="tag28670" onclick="CopyToClipboard('tag28670');return false;" class="tag-decoration">release-8.8.3</div><div id="tag3367" onclick="CopyToClipboard('tag3367');return false;" class="tag-decoration">release-v8</div><div id="tag2267" onclick="CopyToClipboard('tag2267');return false;" class="tag-decoration">release-v8.8</div><div id="tag193" onclick="CopyToClipboard('tag193');return false;" class="tag-decoration">release-v8.8.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/9aeba08e2ce694815ced19a1284adf0d866d9f34" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27156431084" target="_blank">2026-06-08 17:51:12</a></td></tr>
<tr><td><div id="tag11638" onclick="CopyToClipboard('tag11638');return false;" class="tag-decoration">testing</div><div id="tag26117" onclick="CopyToClipboard('tag26117');return false;" class="tag-decoration">testing-be9727f</div><div id="tag19237" onclick="CopyToClipboard('tag19237');return false;" class="tag-decoration">testing-8.8.3</div><div id="tag6241" onclick="CopyToClipboard('tag6241');return false;" class="tag-decoration">testing-v8</div><div id="tag17906" onclick="CopyToClipboard('tag17906');return false;" class="tag-decoration">testing-v8.8</div><div id="tag17662" onclick="CopyToClipboard('tag17662');return false;" class="tag-decoration">testing-v8.8.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/be9727f1c32fa3e2eb8af1ba4cb402e5613bfbfc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/27239758005" target="_blank">2026-06-09 22:23:39</a></td></tr>
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
