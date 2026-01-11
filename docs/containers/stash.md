---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag22448" onclick="CopyToClipboard('tag22448');return false;" class="tag-decoration">nightly</div><div id="tag29054" onclick="CopyToClipboard('tag29054');return false;" class="tag-decoration">nightly-9b709ef61457b9efb38cdb7f6f8401595855947a</div><div id="tag7503" onclick="CopyToClipboard('tag7503');return false;" class="tag-decoration">nightly-7a2283d</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/7a2283d3834977b7b527a910090cca6e4a383f6d" target="_blank">Upstream update: noblevpn-5c07a3a => noblevpn-d932ed0</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20850352935" target="_blank">2026-01-09 11:23:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5993" onclick="CopyToClipboard('tag5993');return false;" class="tag-decoration">release</div><div id="tag11583" onclick="CopyToClipboard('tag11583');return false;" class="tag-decoration">release-0.30.1</div><div id="tag5428" onclick="CopyToClipboard('tag5428');return false;" class="tag-decoration">release-3a47afd</div><div id="tag31794" onclick="CopyToClipboard('tag31794');return false;" class="tag-decoration">release-v0</div><div id="tag12120" onclick="CopyToClipboard('tag12120');return false;" class="tag-decoration">release-v0.30</div><div id="tag321" onclick="CopyToClipboard('tag321');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/3a47afd224024aafe42bd9d5d59576092511b0c1" target="_blank">Upstream update: noblevpn-5c07a3a => noblevpn-d932ed0</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20850353435" target="_blank">2026-01-09 11:23:36</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
