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
<tr><td><div id="tag3671" onclick="CopyToClipboard('tag3671');return false;" class="tag-decoration">nightly</div><div id="tag19094" onclick="CopyToClipboard('tag19094');return false;" class="tag-decoration">nightly-972a3af</div><div id="tag26275" onclick="CopyToClipboard('tag26275');return false;" class="tag-decoration">nightly-4520de77ad3f8c8f9e6d886c9420ee468b79f31e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/972a3af823b0a10a08dd7361a0c4c0c7c4eca3c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31390987460" target="_blank">2026-08-10 13:03:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10161" onclick="CopyToClipboard('tag10161');return false;" class="tag-decoration">release</div><div id="tag14757" onclick="CopyToClipboard('tag14757');return false;" class="tag-decoration">release-b5245d7</div><div id="tag4371" onclick="CopyToClipboard('tag4371');return false;" class="tag-decoration">release-5.0.4</div><div id="tag28416" onclick="CopyToClipboard('tag28416');return false;" class="tag-decoration">release-v5</div><div id="tag15220" onclick="CopyToClipboard('tag15220');return false;" class="tag-decoration">release-v5.0</div><div id="tag29061" onclick="CopyToClipboard('tag29061');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/b5245d7225070a8fa2cfeb17d67ef0e89bb66136" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/30372822483" target="_blank">2026-07-28 15:19:45</a></td></tr>
<tr><td><div id="tag6605" onclick="CopyToClipboard('tag6605');return false;" class="tag-decoration">testing</div><div id="tag18074" onclick="CopyToClipboard('tag18074');return false;" class="tag-decoration">testing-548e80e</div><div id="tag20782" onclick="CopyToClipboard('tag20782');return false;" class="tag-decoration">testing-5.1.0</div><div id="tag5770" onclick="CopyToClipboard('tag5770');return false;" class="tag-decoration">testing-v5</div><div id="tag1132" onclick="CopyToClipboard('tag1132');return false;" class="tag-decoration">testing-v5.1</div><div id="tag15915" onclick="CopyToClipboard('tag15915');return false;" class="tag-decoration">testing-v5.1.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/548e80e4667e44fbaf1cbc46cbad2e8a8a29718f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/31390988136" target="_blank">2026-08-10 13:03:45</a></td></tr>
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
