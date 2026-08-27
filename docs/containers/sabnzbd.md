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
<tr><td><div id="tag5607" onclick="CopyToClipboard('tag5607');return false;" class="tag-decoration">nightly</div><div id="tag7631" onclick="CopyToClipboard('tag7631');return false;" class="tag-decoration">nightly-f54160b</div><div id="tag1244" onclick="CopyToClipboard('tag1244');return false;" class="tag-decoration">nightly-38c2a7bca74a58994c90ae850c20dfd9e7ceddbd</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/f54160b3ca0a44cc8ab8aaa6f6c830384e68019a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33078840323" target="_blank">2026-08-27 13:49:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6797" onclick="CopyToClipboard('tag6797');return false;" class="tag-decoration">release</div><div id="tag13485" onclick="CopyToClipboard('tag13485');return false;" class="tag-decoration">release-c77e1d1</div><div id="tag5345" onclick="CopyToClipboard('tag5345');return false;" class="tag-decoration">release-5.1.2</div><div id="tag21329" onclick="CopyToClipboard('tag21329');return false;" class="tag-decoration">release-v5</div><div id="tag25752" onclick="CopyToClipboard('tag25752');return false;" class="tag-decoration">release-v5.1</div><div id="tag24255" onclick="CopyToClipboard('tag24255');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c77e1d113da93e02e23a53f679612b1db77f7263" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918043872" target="_blank">2026-08-26 01:11:35</a></td></tr>
<tr><td><div id="tag22336" onclick="CopyToClipboard('tag22336');return false;" class="tag-decoration">testing</div><div id="tag13452" onclick="CopyToClipboard('tag13452');return false;" class="tag-decoration">testing-7edd9a2</div><div id="tag16368" onclick="CopyToClipboard('tag16368');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag29786" onclick="CopyToClipboard('tag29786');return false;" class="tag-decoration">testing-v5</div><div id="tag25885" onclick="CopyToClipboard('tag25885');return false;" class="tag-decoration">testing-v5.1</div><div id="tag30647" onclick="CopyToClipboard('tag30647');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7edd9a2b7ea52df607e60ab4c8dbf62c2c07a12b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/32918041543" target="_blank">2026-08-26 01:11:35</a></td></tr>
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
