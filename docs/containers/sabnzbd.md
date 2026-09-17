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
<tr><td><div id="tag7149" onclick="CopyToClipboard('tag7149');return false;" class="tag-decoration">nightly</div><div id="tag19369" onclick="CopyToClipboard('tag19369');return false;" class="tag-decoration">nightly-f0cf7ed</div><div id="tag4122" onclick="CopyToClipboard('tag4122');return false;" class="tag-decoration">nightly-7c8703824f7c3a51646256595177d04752713273</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f0cf7edd3a5ce3fbdb41fae38b464eebf94ea3e3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35265586824" target="_blank">2026-09-17 19:33:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31739" onclick="CopyToClipboard('tag31739');return false;" class="tag-decoration">release</div><div id="tag24691" onclick="CopyToClipboard('tag24691');return false;" class="tag-decoration">release-42e1aa8</div><div id="tag5182" onclick="CopyToClipboard('tag5182');return false;" class="tag-decoration">release-5.1.3</div><div id="tag25969" onclick="CopyToClipboard('tag25969');return false;" class="tag-decoration">release-v5</div><div id="tag646" onclick="CopyToClipboard('tag646');return false;" class="tag-decoration">release-v5.1</div><div id="tag9210" onclick="CopyToClipboard('tag9210');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/42e1aa8373f19048a8f2de7986e2f94780213058" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35240710014" target="_blank">2026-09-17 15:30:35</a></td></tr>
<tr><td><div id="tag22916" onclick="CopyToClipboard('tag22916');return false;" class="tag-decoration">testing</div><div id="tag257" onclick="CopyToClipboard('tag257');return false;" class="tag-decoration">testing-5df8c80</div><div id="tag29693" onclick="CopyToClipboard('tag29693');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag21496" onclick="CopyToClipboard('tag21496');return false;" class="tag-decoration">testing-v5</div><div id="tag18740" onclick="CopyToClipboard('tag18740');return false;" class="tag-decoration">testing-v5.1</div><div id="tag3798" onclick="CopyToClipboard('tag3798');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5df8c809fde0597c0b673853a9c54044c1a909f7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35265606384" target="_blank">2026-09-17 19:33:35</a></td></tr>
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
