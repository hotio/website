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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16567" onclick="CopyToClipboard('tag16567');return false;" class="tag-decoration">release</div><div id="tag4835" onclick="CopyToClipboard('tag4835');return false;" class="tag-decoration">release-3daaba2</div><div id="tag24526" onclick="CopyToClipboard('tag24526');return false;" class="tag-decoration">release-0.24.1789</div><div id="tag8496" onclick="CopyToClipboard('tag8496');return false;" class="tag-decoration">release-v0</div><div id="tag1726" onclick="CopyToClipboard('tag1726');return false;" class="tag-decoration">release-v0.24</div><div id="tag21409" onclick="CopyToClipboard('tag21409');return false;" class="tag-decoration">release-v0.24.1789</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/3daaba2077c638a5d77bdf96e60abd477c3cca34" target="_blank">Version update: 0.24.1787 => 0.24.1789</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25038153555" target="_blank">2026-04-28 06:45:26</a></td></tr>
<tr><td><div id="tag32306" onclick="CopyToClipboard('tag32306');return false;" class="tag-decoration">testing</div><div id="tag30702" onclick="CopyToClipboard('tag30702');return false;" class="tag-decoration">testing-838c5ef</div><div id="tag15714" onclick="CopyToClipboard('tag15714');return false;" class="tag-decoration">testing-0.24.1787</div><div id="tag11597" onclick="CopyToClipboard('tag11597');return false;" class="tag-decoration">testing-v0</div><div id="tag25022" onclick="CopyToClipboard('tag25022');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11176" onclick="CopyToClipboard('tag11176');return false;" class="tag-decoration">testing-v0.24.1787</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/838c5ef54939ed929f2effcb727189cd602f894b" target="_blank">Version update: 0.24.1779 => 0.24.1787</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24980087234" target="_blank">2026-04-27 06:31:58</a></td></tr>
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
