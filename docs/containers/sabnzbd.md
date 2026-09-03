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
<tr><td><div id="tag31329" onclick="CopyToClipboard('tag31329');return false;" class="tag-decoration">nightly</div><div id="tag18249" onclick="CopyToClipboard('tag18249');return false;" class="tag-decoration">nightly-2442f18</div><div id="tag28217" onclick="CopyToClipboard('tag28217');return false;" class="tag-decoration">nightly-069f978e6487a096bd0e5aec226931a4c337d7db</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/2442f180488e7452c14e958f197867d05ebb98d6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33745715011" target="_blank">2026-09-03 10:42:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7323" onclick="CopyToClipboard('tag7323');return false;" class="tag-decoration">release</div><div id="tag24563" onclick="CopyToClipboard('tag24563');return false;" class="tag-decoration">release-046c8b0</div><div id="tag16914" onclick="CopyToClipboard('tag16914');return false;" class="tag-decoration">release-5.1.2</div><div id="tag25626" onclick="CopyToClipboard('tag25626');return false;" class="tag-decoration">release-v5</div><div id="tag14236" onclick="CopyToClipboard('tag14236');return false;" class="tag-decoration">release-v5.1</div><div id="tag32668" onclick="CopyToClipboard('tag32668');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/046c8b035e4a2da1cefa78ad73397a220cde3876" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605402646" target="_blank">2026-09-02 07:48:06</a></td></tr>
<tr><td><div id="tag4296" onclick="CopyToClipboard('tag4296');return false;" class="tag-decoration">testing</div><div id="tag27954" onclick="CopyToClipboard('tag27954');return false;" class="tag-decoration">testing-e63a5b3</div><div id="tag10615" onclick="CopyToClipboard('tag10615');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag27945" onclick="CopyToClipboard('tag27945');return false;" class="tag-decoration">testing-v5</div><div id="tag32696" onclick="CopyToClipboard('tag32696');return false;" class="tag-decoration">testing-v5.1</div><div id="tag32270" onclick="CopyToClipboard('tag32270');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e63a5b3c1a38a713c4187abd18a1b561ce60f241" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33605398475" target="_blank">2026-09-02 07:48:03</a></td></tr>
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
