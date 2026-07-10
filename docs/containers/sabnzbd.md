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
<tr><td><div id="tag23856" onclick="CopyToClipboard('tag23856');return false;" class="tag-decoration">nightly</div><div id="tag18932" onclick="CopyToClipboard('tag18932');return false;" class="tag-decoration">nightly-05f638e</div><div id="tag20803" onclick="CopyToClipboard('tag20803');return false;" class="tag-decoration">nightly-5c247e008c4da825e29bf42f84619ad55ad0f35d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/05f638e4e4b34b238aae61b9111bd1657e3b9367" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29121125375" target="_blank">2026-07-10 20:21:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16254" onclick="CopyToClipboard('tag16254');return false;" class="tag-decoration">release</div><div id="tag3746" onclick="CopyToClipboard('tag3746');return false;" class="tag-decoration">release-87cf11e</div><div id="tag6846" onclick="CopyToClipboard('tag6846');return false;" class="tag-decoration">release-5.0.4</div><div id="tag29803" onclick="CopyToClipboard('tag29803');return false;" class="tag-decoration">release-v5</div><div id="tag10836" onclick="CopyToClipboard('tag10836');return false;" class="tag-decoration">release-v5.0</div><div id="tag32367" onclick="CopyToClipboard('tag32367');return false;" class="tag-decoration">release-v5.0.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/87cf11e3a66915f67f40d8808a80017823bb519b" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/28981862234" target="_blank">2026-07-08 23:05:37</a></td></tr>
<tr><td><div id="tag22346" onclick="CopyToClipboard('tag22346');return false;" class="tag-decoration">testing</div><div id="tag11342" onclick="CopyToClipboard('tag11342');return false;" class="tag-decoration">testing-79fbc9b</div><div id="tag23547" onclick="CopyToClipboard('tag23547');return false;" class="tag-decoration">testing-5.1.0Beta3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/79fbc9be834befb47221d04189d62edbc13501f9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/29099614759" target="_blank">2026-07-10 14:23:11</a></td></tr>
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
