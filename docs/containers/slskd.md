---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag17691" onclick="CopyToClipboard('tag17691');return false;" class="tag-decoration">nightly</div><div id="tag9763" onclick="CopyToClipboard('tag9763');return false;" class="tag-decoration">nightly-e243be9</div><div id="tag22586" onclick="CopyToClipboard('tag22586');return false;" class="tag-decoration">nightly-0.25.1.65534-e3b6bd99</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/e243be93107cb2f406ed260ad84bc2a236788144" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/25987659882" target="_blank">2026-05-17 09:55:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag446" onclick="CopyToClipboard('tag446');return false;" class="tag-decoration">release</div><div id="tag3305" onclick="CopyToClipboard('tag3305');return false;" class="tag-decoration">release-374d77d</div><div id="tag3164" onclick="CopyToClipboard('tag3164');return false;" class="tag-decoration">release-0.25.1</div><div id="tag15817" onclick="CopyToClipboard('tag15817');return false;" class="tag-decoration">release-v0</div><div id="tag31483" onclick="CopyToClipboard('tag31483');return false;" class="tag-decoration">release-v0.25</div><div id="tag5677" onclick="CopyToClipboard('tag5677');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/374d77d2089988eab707ba9b423ee3d0be0d1bdf" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/25987659287" target="_blank">2026-05-17 09:55:23</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
