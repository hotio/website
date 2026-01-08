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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30733" onclick="CopyToClipboard('tag30733');return false;" class="tag-decoration">release</div><div id="tag20834" onclick="CopyToClipboard('tag20834');return false;" class="tag-decoration">release-0.24.752</div><div id="tag30805" onclick="CopyToClipboard('tag30805');return false;" class="tag-decoration">release-19aa645</div><div id="tag21707" onclick="CopyToClipboard('tag21707');return false;" class="tag-decoration">release-v0</div><div id="tag24694" onclick="CopyToClipboard('tag24694');return false;" class="tag-decoration">release-v0.24</div><div id="tag21966" onclick="CopyToClipboard('tag21966');return false;" class="tag-decoration">release-v0.24.752</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/19aa645cbf05e2e0260768c9361ef12a2af97ccd" target="_blank">Version update: 0.24.739 => 0.24.752</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20772143221" target="_blank">2026-01-07 05:56:33</a></td></tr>
<tr><td><div id="tag9503" onclick="CopyToClipboard('tag9503');return false;" class="tag-decoration">testing</div><div id="tag22244" onclick="CopyToClipboard('tag22244');return false;" class="tag-decoration">testing-0.24.766</div><div id="tag16769" onclick="CopyToClipboard('tag16769');return false;" class="tag-decoration">testing-3bbce3f</div><div id="tag11535" onclick="CopyToClipboard('tag11535');return false;" class="tag-decoration">testing-v0</div><div id="tag2067" onclick="CopyToClipboard('tag2067');return false;" class="tag-decoration">testing-v0.24</div><div id="tag16188" onclick="CopyToClipboard('tag16188');return false;" class="tag-decoration">testing-v0.24.766</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3bbce3f568c744a446eccc3743ecc2df11be4bca" target="_blank">Version update: 0.24.752 => 0.24.766</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20808245238" target="_blank">2026-01-08 06:48:19</a></td></tr>
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
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

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
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
