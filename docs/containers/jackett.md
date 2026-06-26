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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29671" onclick="CopyToClipboard('tag29671');return false;" class="tag-decoration">release</div><div id="tag636" onclick="CopyToClipboard('tag636');return false;" class="tag-decoration">release-ae3376a</div><div id="tag20910" onclick="CopyToClipboard('tag20910');return false;" class="tag-decoration">release-0.24.2122</div><div id="tag24046" onclick="CopyToClipboard('tag24046');return false;" class="tag-decoration">release-v0</div><div id="tag31734" onclick="CopyToClipboard('tag31734');return false;" class="tag-decoration">release-v0.24</div><div id="tag15463" onclick="CopyToClipboard('tag15463');return false;" class="tag-decoration">release-v0.24.2122</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ae3376aa2818c74a36c87783439c5c9ab0925f03" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28156837208" target="_blank">2026-06-25 08:21:24</a></td></tr>
<tr><td><div id="tag26219" onclick="CopyToClipboard('tag26219');return false;" class="tag-decoration">testing</div><div id="tag20858" onclick="CopyToClipboard('tag20858');return false;" class="tag-decoration">testing-d0e775b</div><div id="tag11472" onclick="CopyToClipboard('tag11472');return false;" class="tag-decoration">testing-0.24.2125</div><div id="tag16478" onclick="CopyToClipboard('tag16478');return false;" class="tag-decoration">testing-v0</div><div id="tag15757" onclick="CopyToClipboard('tag15757');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2745" onclick="CopyToClipboard('tag2745');return false;" class="tag-decoration">testing-v0.24.2125</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d0e775beb1ec1c0a13e56cc87187c7bfb32ef0a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28222053877" target="_blank">2026-06-26 06:46:01</a></td></tr>
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
