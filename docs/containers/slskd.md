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
<tr><td><div id="tag20009" onclick="CopyToClipboard('tag20009');return false;" class="tag-decoration">nightly</div><div id="tag24476" onclick="CopyToClipboard('tag24476');return false;" class="tag-decoration">nightly-082fa76</div><div id="tag3135" onclick="CopyToClipboard('tag3135');return false;" class="tag-decoration">nightly-0.25.1.65534-8aee7959</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/082fa762697d25283a16c0b5063b000e5ce94692" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/28715104046" target="_blank">2026-07-04 18:08:28</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14100" onclick="CopyToClipboard('tag14100');return false;" class="tag-decoration">release</div><div id="tag31301" onclick="CopyToClipboard('tag31301');return false;" class="tag-decoration">release-b2757c1</div><div id="tag20837" onclick="CopyToClipboard('tag20837');return false;" class="tag-decoration">release-0.25.1</div><div id="tag9977" onclick="CopyToClipboard('tag9977');return false;" class="tag-decoration">release-v0</div><div id="tag11956" onclick="CopyToClipboard('tag11956');return false;" class="tag-decoration">release-v0.25</div><div id="tag8375" onclick="CopyToClipboard('tag8375');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/b2757c11e4b5574192950d94ccf1a9371d9872c1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/28597439562" target="_blank">2026-07-02 14:22:46</a></td></tr>
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
