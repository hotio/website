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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11495" onclick="CopyToClipboard('tag11495');return false;" class="tag-decoration">release</div><div id="tag7115" onclick="CopyToClipboard('tag7115');return false;" class="tag-decoration">release-0a23e29</div><div id="tag20433" onclick="CopyToClipboard('tag20433');return false;" class="tag-decoration">release-0.24.1459</div><div id="tag4281" onclick="CopyToClipboard('tag4281');return false;" class="tag-decoration">release-v0</div><div id="tag13857" onclick="CopyToClipboard('tag13857');return false;" class="tag-decoration">release-v0.24</div><div id="tag27881" onclick="CopyToClipboard('tag27881');return false;" class="tag-decoration">release-v0.24.1459</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0a23e29aa1a36872852394407b6689f6252342bd" target="_blank">Version update: 0.24.1450 => 0.24.1459</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23529246523" target="_blank">2026-03-25 07:09:09</a></td></tr>
<tr><td><div id="tag22469" onclick="CopyToClipboard('tag22469');return false;" class="tag-decoration">testing</div><div id="tag2994" onclick="CopyToClipboard('tag2994');return false;" class="tag-decoration">testing-6e06618</div><div id="tag8571" onclick="CopyToClipboard('tag8571');return false;" class="tag-decoration">testing-0.24.1450</div><div id="tag20114" onclick="CopyToClipboard('tag20114');return false;" class="tag-decoration">testing-v0</div><div id="tag13536" onclick="CopyToClipboard('tag13536');return false;" class="tag-decoration">testing-v0.24</div><div id="tag3928" onclick="CopyToClipboard('tag3928');return false;" class="tag-decoration">testing-v0.24.1450</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6e06618be6415a5aaa614a8e7a425e09e3c4754d" target="_blank">Version update: 0.24.1440 => 0.24.1450</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23475871846" target="_blank">2026-03-24 06:14:31</a></td></tr>
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
