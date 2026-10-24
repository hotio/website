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
<tr><td><div id="tag31343" onclick="CopyToClipboard('tag31343');return false;" class="tag-decoration">nightly</div><div id="tag29884" onclick="CopyToClipboard('tag29884');return false;" class="tag-decoration">nightly-0f5c39b</div><div id="tag521" onclick="CopyToClipboard('tag521');return false;" class="tag-decoration">nightly-d162e0f290d70a96dd33e80ccd4d552d4447a8de</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/0f5c39bb6a282bed9f7d7c340a02ceaa983b5cd3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/40085407568" target="_blank">2026-10-24 10:18:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3357" onclick="CopyToClipboard('tag3357');return false;" class="tag-decoration">release</div><div id="tag30001" onclick="CopyToClipboard('tag30001');return false;" class="tag-decoration">release-4ae2847</div><div id="tag3992" onclick="CopyToClipboard('tag3992');return false;" class="tag-decoration">release-5.1.3</div><div id="tag29524" onclick="CopyToClipboard('tag29524');return false;" class="tag-decoration">release-v5</div><div id="tag29982" onclick="CopyToClipboard('tag29982');return false;" class="tag-decoration">release-v5.1</div><div id="tag19068" onclick="CopyToClipboard('tag19068');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4ae2847cd9421387834200af2b7dae4bfabf5e7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39704440052" target="_blank">2026-10-22 01:13:30</a></td></tr>
<tr><td><div id="tag13238" onclick="CopyToClipboard('tag13238');return false;" class="tag-decoration">testing</div><div id="tag18232" onclick="CopyToClipboard('tag18232');return false;" class="tag-decoration">testing-fede521</div><div id="tag21937" onclick="CopyToClipboard('tag21937');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/fede5213bae84263d80e29261f8927cc87663680" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39704435874" target="_blank">2026-10-22 01:13:28</a></td></tr>
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
