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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31311" onclick="CopyToClipboard('tag31311');return false;" class="tag-decoration">release</div><div id="tag213" onclick="CopyToClipboard('tag213');return false;" class="tag-decoration">release-66f471a</div><div id="tag15513" onclick="CopyToClipboard('tag15513');return false;" class="tag-decoration">release-0.24.2508</div><div id="tag29849" onclick="CopyToClipboard('tag29849');return false;" class="tag-decoration">release-v0</div><div id="tag11454" onclick="CopyToClipboard('tag11454');return false;" class="tag-decoration">release-v0.24</div><div id="tag886" onclick="CopyToClipboard('tag886');return false;" class="tag-decoration">release-v0.24.2508</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/66f471aa59caba6112621a46bb87e2e840e2f1d9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33525105907" target="_blank">2026-09-01 15:20:12</a></td></tr>
<tr><td><div id="tag3265" onclick="CopyToClipboard('tag3265');return false;" class="tag-decoration">testing</div><div id="tag5051" onclick="CopyToClipboard('tag5051');return false;" class="tag-decoration">testing-367cb2b</div><div id="tag757" onclick="CopyToClipboard('tag757');return false;" class="tag-decoration">testing-0.24.2508</div><div id="tag15623" onclick="CopyToClipboard('tag15623');return false;" class="tag-decoration">testing-v0</div><div id="tag18874" onclick="CopyToClipboard('tag18874');return false;" class="tag-decoration">testing-v0.24</div><div id="tag24121" onclick="CopyToClipboard('tag24121');return false;" class="tag-decoration">testing-v0.24.2508</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/367cb2b485e30808644deb1ed5c2f5eb4a56976d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/33499520790" target="_blank">2026-09-01 10:51:20</a></td></tr>
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
