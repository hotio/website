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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17700" onclick="CopyToClipboard('tag17700');return false;" class="tag-decoration">release</div><div id="tag16686" onclick="CopyToClipboard('tag16686');return false;" class="tag-decoration">release-60af1f0</div><div id="tag8355" onclick="CopyToClipboard('tag8355');return false;" class="tag-decoration">release-0.24.1275</div><div id="tag29540" onclick="CopyToClipboard('tag29540');return false;" class="tag-decoration">release-v0</div><div id="tag16124" onclick="CopyToClipboard('tag16124');return false;" class="tag-decoration">release-v0.24</div><div id="tag1785" onclick="CopyToClipboard('tag1785');return false;" class="tag-decoration">release-v0.24.1275</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/60af1f000526222ab9c7e87ef85e86fa9d3150a8" target="_blank">Version update: 0.24.1261 => 0.24.1275</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22657907359" target="_blank">2026-03-04 06:28:25</a></td></tr>
<tr><td><div id="tag57" onclick="CopyToClipboard('tag57');return false;" class="tag-decoration">testing</div><div id="tag18654" onclick="CopyToClipboard('tag18654');return false;" class="tag-decoration">testing-b7f23f5</div><div id="tag26161" onclick="CopyToClipboard('tag26161');return false;" class="tag-decoration">testing-0.24.1278</div><div id="tag835" onclick="CopyToClipboard('tag835');return false;" class="tag-decoration">testing-v0</div><div id="tag21936" onclick="CopyToClipboard('tag21936');return false;" class="tag-decoration">testing-v0.24</div><div id="tag14083" onclick="CopyToClipboard('tag14083');return false;" class="tag-decoration">testing-v0.24.1278</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b7f23f56524cb967a6d63774a9b0fb8f82e52909" target="_blank">Version update: 0.24.1275 => 0.24.1278</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22662051479" target="_blank">2026-03-04 08:53:52</a></td></tr>
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
