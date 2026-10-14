---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1673" onclick="CopyToClipboard('tag1673');return false;" class="tag-decoration">release</div><div id="tag26085" onclick="CopyToClipboard('tag26085');return false;" class="tag-decoration">release-38dd09c</div><div id="tag23437" onclick="CopyToClipboard('tag23437');return false;" class="tag-decoration">release-9.1.1</div><div id="tag6907" onclick="CopyToClipboard('tag6907');return false;" class="tag-decoration">release-v9</div><div id="tag27577" onclick="CopyToClipboard('tag27577');return false;" class="tag-decoration">release-v9.1</div><div id="tag28409" onclick="CopyToClipboard('tag28409');return false;" class="tag-decoration">release-v9.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/38dd09c35c162fd49c5b7ec2b09c1dbb95be8f17" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/38598905083" target="_blank">2026-10-14 16:32:04</a></td></tr>
<tr><td><div id="tag13092" onclick="CopyToClipboard('tag13092');return false;" class="tag-decoration">testing</div><div id="tag16496" onclick="CopyToClipboard('tag16496');return false;" class="tag-decoration">testing-49ed5a9</div><div id="tag20105" onclick="CopyToClipboard('tag20105');return false;" class="tag-decoration">testing-9.1.1</div><div id="tag13244" onclick="CopyToClipboard('tag13244');return false;" class="tag-decoration">testing-v9</div><div id="tag19389" onclick="CopyToClipboard('tag19389');return false;" class="tag-decoration">testing-v9.1</div><div id="tag27100" onclick="CopyToClipboard('tag27100');return false;" class="tag-decoration">testing-v9.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/49ed5a99a32cbd7b8893257d5d2028c69f354d1d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/38598891718" target="_blank">2026-10-14 16:32:01</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
