---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24326" onclick="CopyToClipboard('tag24326');return false;" class="tag-decoration">release</div><div id="tag22740" onclick="CopyToClipboard('tag22740');return false;" class="tag-decoration">release-2449209</div><div id="tag15488" onclick="CopyToClipboard('tag15488');return false;" class="tag-decoration">release-0.24.2806</div><div id="tag26736" onclick="CopyToClipboard('tag26736');return false;" class="tag-decoration">release-v0</div><div id="tag29193" onclick="CopyToClipboard('tag29193');return false;" class="tag-decoration">release-v0.24</div><div id="tag11559" onclick="CopyToClipboard('tag11559');return false;" class="tag-decoration">release-v0.24.2806</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/2449209cd33d654d258c5953934b975dfadd80a5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/37740070998" target="_blank">2026-10-08 06:52:40</a></td></tr>
<tr><td><div id="tag29726" onclick="CopyToClipboard('tag29726');return false;" class="tag-decoration">testing</div><div id="tag25182" onclick="CopyToClipboard('tag25182');return false;" class="tag-decoration">testing-fcd283b</div><div id="tag13337" onclick="CopyToClipboard('tag13337');return false;" class="tag-decoration">testing-0.24.2806</div><div id="tag1388" onclick="CopyToClipboard('tag1388');return false;" class="tag-decoration">testing-v0</div><div id="tag22645" onclick="CopyToClipboard('tag22645');return false;" class="tag-decoration">testing-v0.24</div><div id="tag8317" onclick="CopyToClipboard('tag8317');return false;" class="tag-decoration">testing-v0.24.2806</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/fcd283b2439a20ae60d8d1c3a8398e24ab4e7cbb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/37740068492" target="_blank">2026-10-08 06:52:38</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
