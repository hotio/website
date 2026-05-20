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
<tr><td><div id="tag4398" onclick="CopyToClipboard('tag4398');return false;" class="tag-decoration">nightly</div><div id="tag16591" onclick="CopyToClipboard('tag16591');return false;" class="tag-decoration">nightly-341894c</div><div id="tag18861" onclick="CopyToClipboard('tag18861');return false;" class="tag-decoration">nightly-0.25.1.65534-03b35a5a</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/341894cc6cb58d05f1e954609f2b4e16c68710ef" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/26141030409" target="_blank">2026-05-20 04:19:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13801" onclick="CopyToClipboard('tag13801');return false;" class="tag-decoration">release</div><div id="tag15449" onclick="CopyToClipboard('tag15449');return false;" class="tag-decoration">release-374d77d</div><div id="tag2449" onclick="CopyToClipboard('tag2449');return false;" class="tag-decoration">release-0.25.1</div><div id="tag22594" onclick="CopyToClipboard('tag22594');return false;" class="tag-decoration">release-v0</div><div id="tag1811" onclick="CopyToClipboard('tag1811');return false;" class="tag-decoration">release-v0.25</div><div id="tag28764" onclick="CopyToClipboard('tag28764');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/374d77d2089988eab707ba9b423ee3d0be0d1bdf" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/25987659287" target="_blank">2026-05-17 09:55:23</a></td></tr>
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
