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
<tr><td><div id="tag5905" onclick="CopyToClipboard('tag5905');return false;" class="tag-decoration">nightly</div><div id="tag15322" onclick="CopyToClipboard('tag15322');return false;" class="tag-decoration">nightly-f0cf7ed</div><div id="tag12315" onclick="CopyToClipboard('tag12315');return false;" class="tag-decoration">nightly-7c8703824f7c3a51646256595177d04752713273</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f0cf7edd3a5ce3fbdb41fae38b464eebf94ea3e3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35265586824" target="_blank">2026-09-17 19:33:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25797" onclick="CopyToClipboard('tag25797');return false;" class="tag-decoration">release</div><div id="tag9493" onclick="CopyToClipboard('tag9493');return false;" class="tag-decoration">release-4ddb3c4</div><div id="tag22828" onclick="CopyToClipboard('tag22828');return false;" class="tag-decoration">release-5.1.3</div><div id="tag3068" onclick="CopyToClipboard('tag3068');return false;" class="tag-decoration">release-v5</div><div id="tag367" onclick="CopyToClipboard('tag367');return false;" class="tag-decoration">release-v5.1</div><div id="tag26794" onclick="CopyToClipboard('tag26794');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4ddb3c4fda361856ab55e9395cac018dca1110a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35265594397" target="_blank">2026-09-17 19:33:28</a></td></tr>
<tr><td><div id="tag24575" onclick="CopyToClipboard('tag24575');return false;" class="tag-decoration">testing</div><div id="tag21463" onclick="CopyToClipboard('tag21463');return false;" class="tag-decoration">testing-5df8c80</div><div id="tag19759" onclick="CopyToClipboard('tag19759');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag29414" onclick="CopyToClipboard('tag29414');return false;" class="tag-decoration">testing-v5</div><div id="tag1063" onclick="CopyToClipboard('tag1063');return false;" class="tag-decoration">testing-v5.1</div><div id="tag32145" onclick="CopyToClipboard('tag32145');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5df8c809fde0597c0b673853a9c54044c1a909f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35265606384" target="_blank">2026-09-17 19:33:35</a></td></tr>
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
