---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag22084" onclick="CopyToClipboard('tag22084');return false;" class="tag-decoration">nightly</div><div id="tag2418" onclick="CopyToClipboard('tag2418');return false;" class="tag-decoration">nightly-1a67cc0</div><div id="tag13989" onclick="CopyToClipboard('tag13989');return false;" class="tag-decoration">nightly-8a0dfa50e602a3bb99135f9177af729d4b375d70</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/1a67cc088901c3e43860d207fd480e254db0c7bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39135387652" target="_blank">2026-10-18 14:18:17</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24799" onclick="CopyToClipboard('tag24799');return false;" class="tag-decoration">release</div><div id="tag17519" onclick="CopyToClipboard('tag17519');return false;" class="tag-decoration">release-9738b61</div><div id="tag28604" onclick="CopyToClipboard('tag28604');return false;" class="tag-decoration">release-5.1.3</div><div id="tag11206" onclick="CopyToClipboard('tag11206');return false;" class="tag-decoration">release-v5</div><div id="tag13216" onclick="CopyToClipboard('tag13216');return false;" class="tag-decoration">release-v5.1</div><div id="tag17842" onclick="CopyToClipboard('tag17842');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9738b61d32dea7aa0ca756a58ffc7ea10194a884" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39135387250" target="_blank">2026-10-18 14:18:16</a></td></tr>
<tr><td><div id="tag1682" onclick="CopyToClipboard('tag1682');return false;" class="tag-decoration">testing</div><div id="tag26189" onclick="CopyToClipboard('tag26189');return false;" class="tag-decoration">testing-bb6a9e4</div><div id="tag16173" onclick="CopyToClipboard('tag16173');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/bb6a9e476f5efe78eb544921eac2f211be81449b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/37560337319" target="_blank">2026-10-07 02:05:55</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
