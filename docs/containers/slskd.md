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
<tr><td><div id="tag31957" onclick="CopyToClipboard('tag31957');return false;" class="tag-decoration">nightly</div><div id="tag4781" onclick="CopyToClipboard('tag4781');return false;" class="tag-decoration">nightly-d6d3c91</div><div id="tag791" onclick="CopyToClipboard('tag791');return false;" class="tag-decoration">nightly-0.25.1.65534-e42a525d</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/d6d3c91b2027978b9bb9895d337e141de13872de" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/29672243515" target="_blank">2026-07-19 03:45:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5625" onclick="CopyToClipboard('tag5625');return false;" class="tag-decoration">release</div><div id="tag5345" onclick="CopyToClipboard('tag5345');return false;" class="tag-decoration">release-5bd03fb</div><div id="tag31543" onclick="CopyToClipboard('tag31543');return false;" class="tag-decoration">release-0.25.1</div><div id="tag20769" onclick="CopyToClipboard('tag20769');return false;" class="tag-decoration">release-v0</div><div id="tag18777" onclick="CopyToClipboard('tag18777');return false;" class="tag-decoration">release-v0.25</div><div id="tag12128" onclick="CopyToClipboard('tag12128');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/5bd03fb1a5f9ccb565f19cc73d7ae2f0c1fce91d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/29681098189" target="_blank">2026-07-19 09:10:07</a></td></tr>
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
